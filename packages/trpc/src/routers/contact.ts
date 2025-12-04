import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "@workspace/trpc/init";
import { resend } from "@workspace/resend/init";
import { TRPCError } from "@trpc/server";
import { NewMessageNotificationEmail } from "@workspace/resend/templates/new-message-notification-email";

export const contactRouter = createTRPCRouter({
  sendContactUsForm: baseProcedure
    .input(
      z.object({
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
        phoneNumber: z.string().optional(),
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
      }),
    )
    .mutation(async ({ input }) => {
      const { data, error } = await resend.emails.send({
        from: "noreply <noreply@resend.dev>",
        to: ["adebsa2401@gmail.com"],
        subject: input.subject,
        react: NewMessageNotificationEmail({
          senderName: input.name,
          senderEmail: input.email,
          senderPhoneNumber: input.phoneNumber,
          interestedIn: input.interestedIn,
          message: input.message,
        }),
      });

      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send email",
          cause: error,
        });
      }

      return data;
    }),
});
