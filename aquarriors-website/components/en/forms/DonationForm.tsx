import {
  PayPalButtons,
  PayPalScriptProvider,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import {
  OnApproveData,
  CreateOrderActions,
  OnApproveActions,
} from "@paypal/paypal-js/types/components/buttons";
import { DonationFormData } from "@/utils/formSchemas";
import {
  handleMakeDonation,
  handleDonationComplete,
} from "@/actions/donationProcessing";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { donationFormSchema } from "@/utils/formSchemas";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import useDonationFormStore from "@/stores/donationFormStore";
import useCustomDonationStore from "@/stores/customDonationStore";
import {
  predefinedDonationTypes,
  predefinedDonationAmounts,
} from "@/utils/constants";
import {
  DonationAmountField,
  DonationTypeField,
  NameField,
  EmailField,
  PhoneField,
  MessageField,
  SubscribeField,
} from "./FormFields";
import { IoClose as CloseIcon } from "react-icons/io5";
import { FaArrowRight as RightArrowIcon } from "react-icons/fa";
import { FaArrowLeft as LeftArrowIcon } from "react-icons/fa";

const MakeADonation = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <>
      <DonationTypeField />
      <DonationAmountField />
      <Button className="ml-auto mt-6 flex" onClick={handleNext}>
        Next
        <RightArrowIcon className="ml-2 size-4" />
      </Button>
    </>
  );
};

const DonorInfo = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <>
      <NameField />
      <EmailField />
      <PhoneField />
      <MessageField />
      <SubscribeField />
      <div className="mt-6 flex justify-between">
        <Button variant="secondary" onClick={handleBack}>
          <LeftArrowIcon className="mr-2 size-4" />
          Back
        </Button>
        <Button type="submit" className="ml-auto flex">
          Next
          <RightArrowIcon className="ml-2 size-4" />
        </Button>
      </div>
    </>
  );
};

const ChooseYourPaymentMethod = ({
  formData,
  handleBack,
  onPaymentComplete,
}: {
  formData: DonationFormData;
  handleBack: () => void;
  onPaymentComplete: (orderID: string) => void;
}) => {
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
  };

  async function createOrder(
    data: Record<string, unknown>,
    actions: CreateOrderActions,
  ) {
    try {
      const response = await handleMakeDonation(formData);
      return response.id;
    } catch (error) {
      alert("Oops! An error occurred while processing your donation.");
    }
  }

  async function onApprove(data: OnApproveData, actions: OnApproveActions) {
    onPaymentComplete(data.orderID);
  }

  return (
    <div className="mt-9 flex h-52 flex-col justify-between">
      <div className="App">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </PayPalScriptProvider>
      </div>
      <Button variant="secondary" className="w-fit" onClick={handleBack}>
        <LeftArrowIcon className="mr-2 size-4" />
        Back
      </Button>
    </div>
  );
};

export default function DonationForm() {
  const [formStep, setFormStep] = useState(1);
  const setIsDonationFormOpen = useDonationFormStore(
    (state) => state.setIsDonationFormOpen,
  );
  const { toast } = useToast();
  const setCustomDonationAmount = useCustomDonationStore(
    (state) => state.setCustomDonationAmount,
  );

  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      type: predefinedDonationTypes[0],
      amount: predefinedDonationAmounts[0],
      subscribe: false,
    },
  });

  async function handleNext() {
    const isValid = await form.trigger(["type", "amount"]);
    if (isValid) {
      form.clearErrors();
      setFormStep(formStep + 1);
    }
  }

  function handleBack() {
    setFormStep(formStep - 1);
  }

  async function onPaymentComplete(orderID: string) {
    try {
      await handleDonationComplete(form.getValues(), orderID);
      toast({
        title: "Donation Successful!",
        description: "Thank you for your contribution!",
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "An error occurred while processing your donation.",
        variant: "destructive",
      });
    } finally {
      setCustomDonationAmount(null);
      form.reset();
      setIsDonationFormOpen(false);
    }
  }

  return (
    <div className="fixed left-1/2 top-1/2 z-30 max-h-[90vh] w-full max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border bg-background p-4 md:w-3/5 md:p-8 lg:w-1/3">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          form.reset();
          setCustomDonationAmount(null);
          setFormStep(1);
          setIsDonationFormOpen(false);
        }}
        className="absolute right-3 top-3"
      >
        <CloseIcon className="size-6 fill-muted-foreground" />
      </Button>
      <h3 className="mt-6 text-center text-2xl font-bold md:mt-3 md:text-3xl">
        {(() => {
          switch (formStep) {
            case 1:
              return "Make a Donation";
            case 2:
              return "Donor's Info";
            case 3:
              return "Choose your payment method";
          }
        })()}
      </h3>
      {(formStep === 1 || formStep === 2) && (
        <FormProvider {...form}>
          <Form {...form}>
            <form
              className="mt-9 flex flex-col gap-5"
              onSubmit={form.handleSubmit(() => setFormStep(formStep + 1))}
            >
              {formStep === 1 && <MakeADonation handleNext={handleNext} />}
              {formStep === 2 && <DonorInfo handleBack={handleBack} />}
            </form>
          </Form>
        </FormProvider>
      )}
      {formStep === 3 && (
        <ChooseYourPaymentMethod
          formData={form.getValues()}
          handleBack={handleBack}
          onPaymentComplete={onPaymentComplete}
        />
      )}
    </div>
  );
}
