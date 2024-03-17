'use client';
import { Heading } from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/User-Avatar";
import { BotAvatar } from "@/components/Bot-Avatart";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";

const ConversationPage = () => {
  const proModal = useProModal();
  //router
  const router = useRouter();

  //messages
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);

  //form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  //loading State
  const isLoading = form.formState.isSubmitting;

  //Submit the form
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };
       const newMessages = [...messages, userMessage];

       const response = await axios.post("api/conversation", { 
        messages: newMessages,
        })

        setMessages((current) => [...current, userMessage, response.data]);
        form.reset();
    } catch (error: any) {
      //TODO: Open Pro modal
      if(error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong")
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-cyan-700"
        bgColor="bg-cyan-700/10"
      />

      <div className="px-4 lg:px-8 ">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 
            focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className=" bg-[#172032] text-white px-5 border-none focus:outline-none hover:border-none hover:outline-none"
                        disabled={isLoading}
                        placeholder="Go on Make a Conversation with me!"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className=" bg-cyan-700 col-span-12 lg:col-span-2 w-full hover:bg-cyan-500"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="h-full rounded-lg w-full flex items-center justify-center bg-muted bg-[#2a395e] text-white">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No Conversation Started" />
          )}

          <div className="flex flex-col-reverse gap-y-4 ">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "assistant"
                    ? "bg-[#2a395e] text-white"
                    : "bg-gray-600 text-white"
                )}
              >
                {message.role === "assistant" ? <BotAvatar /> : <UserAvatar />}
                <p className="text-md mt-1">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
