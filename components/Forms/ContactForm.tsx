"use client";
import { Eye, EyeOff, Headset, Loader2, Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { UserProps } from "@/types/types"

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { createUser } from "@/actions/users";
import TextArea from "../FormInputs/TextAreaInput";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<UserProps>();
  const router = useRouter();
  async function onSubmit(data: UserProps) {
    setLoading(true);


    try {
      const res = await createUser(data);
      if (res.status === 409) {
        setLoading(false);
        setEmailErr(res.error);
      } else if (res.status === 200) {
        setLoading(false);
        toast.success("Message Sent Successfully");
        reset();


      } else {
        setLoading(false);
        toast.error("Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong, try again");
    }
  }
  return (
    <div className="w-full py-5 lg:px-8 px-6">
      <div className="">
        <div className="py-4 text-gray-900">
          <h2 className="text-xl lg:text-xl font-black leading-9 tracking-tight  ">
            Contact Us
          </h2>
          <p className="text-xl lg:text-4xl">Reach Out to Us</p>
        </div>
      </div>
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>

          <TextInput
            register={register}
            errors={errors}
            label="Full Name"
            name="fullName"
            icon={User}
            placeholder="Full Name"
          />

          <TextInput
            register={register}
            errors={errors}
            label="Phone"
            name="phone"
            icon={Headset}
            placeholder="phone"
          />

          <TextInput
            type="email"
            register={register}
            errors={errors}
            label="Email Address"
            name="email"
            icon={Mail}
            placeholder="email"
          />
          {emailErr && (
            <p className="text-red-500 text-xs mt-2">{emailErr}</p>
          )}

          <TextArea register={register} errors={errors} label={"Enter Your Message"} name={"message"} />

          <div>
            <SubmitButton
              title="Send Message"
              loadingTitle="Sending Message Please wait.."
              loading={loading}
              className="w-full"
              loaderIcon={Loader2}
              showIcon={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
