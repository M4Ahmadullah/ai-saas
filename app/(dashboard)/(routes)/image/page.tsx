'use client';
import { Heading } from "@/components/Heading";
import { Download, ImageIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { amountOptions, formSchema, resolutionOptions } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { ProModal } from "@/components/pro-modal";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";
const ImageGenPage = () => {
  const proModal = useProModal();
  //router
  const router = useRouter();

  //images
  const [images, setImages] = useState<any>([]);

  //form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512"
    },
  });

  //loading State
  const isLoading = form.formState.isSubmitting;

  //Submit the form
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);

      //Api route
      const response = await axios.post("api/image", values)

      // urls
      const urls = response.data.map((image: { url: string }) => image.url)

      //set the image in that url
      setImages(urls)
      form.reset();
    } catch (error: any) {
      //TODO: Open Pro modal
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      {/* Heading */}
      <Heading
        title="Image Generation"
        description="Imagine Anything and write a short Message to Generate an Image."
        icon={ImageIcon}
        iconColor="text-sky-600"
        bgColor="bg-sky-600/10"
      />

      <div className="px-4 lg:px-8 ">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 
            focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              {/* Form Field */}
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 px-5 text-white outline-none focus-visible:ring-0 
                        focus-visible:ring-transparent bg-[#172032]"
                        disabled={isLoading}
                        placeholder="which kind of Photo are You thinking Right now?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Amount FormField */}
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 bg-[#172032]">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#172032] text-white">
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="bg-[#172032]">
                        {amountOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="bg-[#172032] text-white"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Resolution FormField */}
              <FormField
                name="resolution"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#172032] text-white">
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="bg-[#172032] text-white">
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className=" bg-blue-600 hover:bg-blue-500 col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20 bg-[#2a395e] text-white">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label="No Images Generated" />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 text-white">
            {images.map((src: any) => (
              <Card
                key={src}
                className="rounded-lg overflow-hidden  text-white"
              >
                <div className="relative aspect-square ">
                  <Image src={src} alt="logo" fill />
                </div>
                <CardFooter className="p-2 bg-[#2a395e] text-white">
                  <Button
                    onClick={() => window.open(src)}
                    variant={"secondary"}
                    className="w-full bg-[#2a395e] text-white hover:bg-[#2a395e]"
                  >
                    <Download className="h-4 w-4 mr-2 bg-[#2a395e] text-white" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenPage;
