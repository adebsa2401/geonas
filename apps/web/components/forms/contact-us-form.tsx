"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Textarea } from "@workspace/ui/components/textarea";
import { Button } from "@workspace/ui/components/button";

const validationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  interestedIn: z.enum(["surveying", "consultation", "other"], {
    required_error: "Please select an option",
  }),
  subject: z
    .string({
      required_error: "Subject is required",
    })
    .min(2, "Subject must be at least 2 characters"),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(10, "Message must be at least 10 characters"),
});

type ContactUsFormValues = z.infer<typeof validationSchema>;

const ContactUsForm = () => {
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = useCallback((values: ContactUsFormValues) => {
    console.log("Form submitted with values:", values);
  }, []);

  return (
    <Form {...form}>
      <form
        className="space-y-5 py-10"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary/80 text-base">
                Your Name*
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-12 bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary/80 text-base">
                Your Email*
              </FormLabel>
              <FormControl>
                <Input type="email" {...field} className="h-12 bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interestedIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary/80 text-base">
                Interested In*
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="h-12! w-full bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="surveying">Surveying</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary/80 text-base">
                Subject*
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-12 bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary/80 text-base">
                Your Message*
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none max-h-96 bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full">
          Send
        </Button>
      </form>
    </Form>
  );
};

export { ContactUsForm };
