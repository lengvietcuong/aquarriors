"use client";

import { useState, useEffect, useRef } from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AutoNumeric from "autonumeric";
import useCustomDonationStore from "@/stores/customDonationStore";
import {
  usdToVndRate,
  kgTrashPerDollar,
  predefinedDonationTypes,
  predefinedDonationAmounts,
} from "@/utils/constants";
import { isPositiveInteger, getTextWidth } from "@/utils/helperFunctions";
import { IoPerson as PersonIcon } from "react-icons/io5";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaPhone as PhoneIcon } from "react-icons/fa6";
import { RiMessage2Fill as MessageIcon } from "react-icons/ri";
import { IoIosInformationCircle as InfoIcon } from "react-icons/io";
import { IoIosWarning as WarningIcon } from "react-icons/io";

export function NameField() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="name"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            <PersonIcon className="mr-2 inline size-4" />
            Tên*
          </FormLabel>
          <FormControl>
            <Input
              placeholder="Nguyễn Văn A"
              {...field}
              className={`${
                fieldState.error ? "border-destructive bg-destructive/40" : ""
              }`}
            />
          </FormControl>
          <FormMessage>
            {fieldState.error && (
              <>
                <WarningIcon className="mr-2 inline size-4" />
                {fieldState.error.message}
              </>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
}

export function EmailField() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="email"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            <EmailIcon className="mr-2 inline size-4" />
            Email*
          </FormLabel>
          <FormControl>
            <Input
              placeholder="nguyenvana@example.com"
              {...field}
              className={`${
                fieldState.error ? "border-destructive bg-destructive/40" : ""
              }`}
            />
          </FormControl>
          <FormMessage>
            {fieldState.error && (
              <>
                <WarningIcon className="mr-2 inline size-4" />
                {fieldState.error.message}
              </>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
}

export function PhoneField() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="phone"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            <PhoneIcon className="mr-2 inline size-4" />
            Số điện thoại
          </FormLabel>
          <FormControl>
            <Input
              placeholder="1234567890 (Không bắt buộc)"
              {...field}
              className={`${
                fieldState.error ? "border-destructive bg-destructive/40" : ""
              }`}
            />
          </FormControl>
          <FormMessage>
            {fieldState.error && (
              <>
                <WarningIcon className="mr-2 inline size-4" />
                {fieldState.error.message}
              </>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
}

export function DonationTypeField() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Loại</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-2 gap-3"
            >
              {predefinedDonationTypes.map((type) => (
                <FormItem key={type}>
                  <FormLabel
                    className={`flex w-full cursor-pointer justify-center rounded-md border-2 p-4 ${
                      field.value === type
                        ? "border-foreground bg-foreground text-background"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <span className="font-heading font-semibold">
                      {type === "one-time" ? "Một lần" : "Mỗi tháng"}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroupItem value={type} className="hidden" />
                  </FormControl>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function DonationAmountField() {
  const { control } = useFormContext();
  const { customDonationAmount, setCustomDonationAmount } =
    useCustomDonationStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const autoNumericRef = useRef<AutoNumeric | null>(null);
  const isCurrentAmountValid = isPositiveInteger(customDonationAmount || 0);
  const [customAmountWidth, setCustomAmountWidth] = useState(0);

  useEffect(() => {
    const width =
      customDonationAmount && autoNumericRef.current
        ? getTextWidth(autoNumericRef.current.getFormatted()) * 1.35
        : getTextWidth("Custom amount");
    setCustomAmountWidth(width);
  }, [customDonationAmount]);

  useEffect(() => {
    if (!inputRef.current) return;

    autoNumericRef.current = new AutoNumeric(inputRef.current, {
      digitGroupSeparator: ",",
      decimalPlaces: 0, // Only integers
      maximumValue: "9999999999", // 10 digits
    });
    autoNumericRef.current.set(customDonationAmount);

    return () => {
      autoNumericRef.current?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Controller
      control={control}
      name="amount"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>Amount</FormLabel>
          <FormDescription>
            <InfoIcon className="mr-2 inline size-4" />
            {`Mỗi ${usdToVndRate.toLocaleString()}đ là ${kgTrashPerDollar}kg rác được dọn.`}
          </FormDescription>
          <FormControl>
            <RadioGroup
              onValueChange={(value) => {
                field.onChange(parseInt(value, 10));
              }}
              value={field.value}
              className="grid grid-cols-2 gap-3"
            >
              {predefinedDonationAmounts.map((amount) => (
                <FormItem key={amount}>
                  <FormLabel
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-md border-2 p-4 ${
                      amount === field.value && amount !== customDonationAmount
                        ? "border-foreground bg-foreground text-background"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <span className="font-heading text-lg font-semibold">
                      {(amount * usdToVndRate).toLocaleString()}đ
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {amount * kgTrashPerDollar}kg
                    </span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroupItem
                      value={amount.toString()}
                      className="hidden"
                    />
                  </FormControl>
                </FormItem>
              ))}
              <FormItem className="col-span-2">
                <FormLabel
                  className={`flex min-h-20 cursor-pointer flex-col items-center justify-center rounded border-2 focus-within:border-none focus-within:bg-transparent focus-within:text-foreground focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 ${
                    fieldState.error
                      ? "border-destructive bg-destructive/40 focus-within:bg-destructive/40"
                      : customDonationAmount === field.value
                      ? "border-foreground bg-foreground text-background"
                      : "not:focus-within:hover:bg-secondary"
                  }`}
                  onClick={() => {
                    if (!customDonationAmount) inputRef.current?.focus();
                  }}
                >
                  <div>
                    <input
                      ref={inputRef}
                      placeholder="Tuỳ chỉnh"
                      onFocus={() => {
                        field.onChange(
                          (customDonationAmount || 0) / usdToVndRate
                        );
                      }}
                      onChange={() => {
                        const amount =
                          autoNumericRef.current?.getNumber() || null;
                        field.onChange((amount || 0) / usdToVndRate);
                        setCustomDonationAmount(amount);
                      }}
                      className={
                        "inline-block border-none bg-transparent text-center text-lg font-semibold outline-none placeholder:text-sm placeholder:font-normal"
                      }
                      style={{ width: customAmountWidth }}
                    />
                    {isCurrentAmountValid && (
                      <span className="font-heading text-lg font-semibold">
                        đ
                      </span>
                    )}
                  </div>
                  {isCurrentAmountValid && (
                    <span className="text-sm text-muted-foreground">
                      {(
                        ((customDonationAmount || 0) / usdToVndRate) *
                        kgTrashPerDollar
                      ).toLocaleString()}
                      kg
                    </span>
                  )}
                </FormLabel>
                <FormControl>
                  <RadioGroupItem
                    value={customDonationAmount?.toString() || ""}
                    className="hidden"
                  ></RadioGroupItem>
                </FormControl>
                <FormMessage className="absolute">
                  {fieldState.error && (
                    <>
                      <WarningIcon className="mr-2 inline size-4" />
                      {fieldState.error.message}
                    </>
                  )}
                </FormMessage>
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export function MessageField() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="message"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            <MessageIcon className="mr-2 inline size-4" />
            Lời gửi gắm
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder="Lời nhắn của bạn...(không bắt buộc)"
              {...field}
              className={`resize-none ${
                fieldState.error ? "border-destructive bg-destructive/40" : ""
              }`}
            />
          </FormControl>
          <FormMessage>
            {fieldState.error && (
              <>
                <WarningIcon className="mr-2 inline size-4" />
                {fieldState.error.message}
              </>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
}

export function OldEnoughField() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="oldEnough"
      render={({ field, fieldState }) => (
        <FormItem>
          <div className="mt-2 flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>Tôi từ 16 tuổi trở lên</FormLabel>
          </div>
          <FormMessage>
            {fieldState.error && (
              <>
                <WarningIcon className="mr-2 inline size-4" />
                {fieldState.error.message}
              </>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
}

export function SubscribeField() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="subscribe"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormLabel>Gửi tôi cập nhật về dự án này</FormLabel>
        </FormItem>
      )}
    />
  );
}
