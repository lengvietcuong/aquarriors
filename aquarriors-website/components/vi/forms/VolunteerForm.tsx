"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { handleVolunteerRegistration } from "@/actions/volunteerRegistration";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { volunteerFormSchema } from "@/utils/formSchemas";
import { VolunteerFormData } from "@/utils/formSchemas";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import useVolunteerFormStore from "@/stores/volunteerFormStore";
import { IoClose as CloseIcon } from "react-icons/io5";
import { IoIosSend as SendIcon } from "react-icons/io";
import { AiOutlineLoading as LoadingIcon } from "react-icons/ai";
import {
  NameField,
  EmailField,
  PhoneField,
  OldEnoughField,
  SubscribeField,
} from "./FormFields";

export default function VolunteerForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAddingToDatabase, setIsAddingToDatabase] = useState(false);
  const setIsVolunteerFormOpen = useVolunteerFormStore(
    (state) => state.setIsVolunteerFormOpen,
  );
  const { toast } = useToast();

  const form = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      oldEnough: false,
      subscribe: false,
    },
  });

  async function onSubmit(data: VolunteerFormData) {
    try {
      setIsAddingToDatabase(true);
      await handleVolunteerRegistration(token, data);
      toast({
        title: "Registration Successful!",
        description: "See you at the event!",
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsAddingToDatabase(false);
      form.reset();
      setIsVolunteerFormOpen(false);
    }
  }

  return (
    <div className="fixed left-1/2 top-1/2 z-30 max-h-[90vh] w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border bg-background p-4 md:w-3/5 md:p-8 lg:w-1/3">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          form.reset();
          setIsVolunteerFormOpen(false);
        }}
        className="absolute right-3 top-3"
      >
        <CloseIcon className="size-6 fill-muted-foreground" />
      </Button>
      <h3 className="mt-6 text-center text-2xl font-bold md:mt-3 md:text-3xl">
        Đăng kí tình nguyện
      </h3>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        CHo sự kiện dọn rác vào ngày 17 tháng 11, 2024.
      </p>
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-9 flex flex-col gap-5"
          >
            <NameField />
            <EmailField />
            <PhoneField />
            <OldEnoughField />
            <SubscribeField />
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef}
              onChange={(token) => setToken(token)}
              className="mt-2 hidden dark:block"
              theme="dark"
            />
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef}
              onChange={(token) => setToken(token)}
              className="mt-2 dark:hidden"
              theme="light"
            />
            <Button
              disabled={!token}
              type="submit"
              className="ml-auto mt-4 flex"
            >
              {isAddingToDatabase ? (
                <LoadingIcon className="mr-2 size-4 animate-spin" />
              ) : (
                <SendIcon className="mr-2 size-4" />
              )}
              Nộp
            </Button>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
}
