"use client";

import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const DoNotStopDataFlowInRenderingWithForm = () => {
  const [initialCount, setInitialCount] = useState<number>(0);
  console.log(initialCount);
  return (
    <div className="space-y-16">
      <div className="flex flex-col space-y-4">
        <div>Initial Count: {initialCount}</div>
        <div>
          <Button onClick={() => setInitialCount(0)}>Reset</Button>
          <Button onClick={() => setInitialCount((prevCount) => prevCount + 1)}>
            +
          </Button>
          <Button onClick={() => setInitialCount((prevCount) => prevCount - 1)}>
            -
          </Button>
        </div>
      </div>
      <FormWithPropsInState initialCounter={initialCount} />
      <FormWithPropsUsedDirectly initialCounter={initialCount} />
    </div>
  );
};

const formSchema = z.object({
  username: z.string().min(2).max(50),
  counter: z.number(),
});
export function FormWithPropsInState({
  initialCounter,
}: {
  initialCounter: number;
}) {
  console.log(initialCounter);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      counter: initialCounter,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ProfileFormBase />
      </form>
    </Form>
  );
}

export function FormWithPropsUsedDirectly({
  initialCounter,
}: {
  initialCounter: number;
}) {
  console.log(initialCounter);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      counter: initialCounter,
    },
  });

  useEffect(() => {
    console.log("I will rerender");
    form.setValue("counter", initialCounter);
  }, [initialCounter]);

  // better Effect --> It is the duplicate of the one above
  // Added here to illustrate better optimization
  // Move before the other effect to see the effect
  useEffect(() => {
    // Only update if the value has actually changed
    const currentValue = form.watch("counter");
    if (currentValue !== initialCounter) {
      console.log("I will rerender less");
      form.setValue("counter", initialCounter, { shouldDirty: true });
    }
  }, [initialCounter, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ProfileFormBase />
      </form>
    </Form>
  );
}

function ProfileFormBase() {
  const form = useFormContext();
  return (
    <>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="counter"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CounterValue</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </>
  );
}
