"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface DialogAcessoriosProps {
  title: string;
  description: string;
  image: string;
  color: string;
  list: {
    img: string;
    title: string;
  }[];
}

export default function DialogAcessorios({
  title,
  description,
  image,
  color,
  list,
}: DialogAcessoriosProps) {
  return (
    <Dialog>
      <DialogTrigger className="w-full ">
        <div
          className={`flex flex-col gap-2 w-full  h-56 md:h-76 relative rounded-xl overflow-hidden shadow-lg ${color} text-white`}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold relative z-10 mt-8">
            {title}
          </h2>
          <p className="text-md relative z-10">{description}</p>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover absolute top-0 left-0"
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className={`${color} text-white w-full max-w-lg md:min-w-3xl flex flex-col gap-4 items-center justify-center border-none`}
      >
        <DialogTitle className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold relative z-10 mt-8">
            {title}
          </h2>
          <p className="text-lg relative z-10 font-normal">{description}</p>
        </DialogTitle>
        <div className="flex flex-col gap-2 w-full">
          {list.map((item) => (
            <div key={item.title} className="flex items-center gap-8 mt-4">
              <div className="relative h-16 w-16 md:h-24 md:w-38 rounded-lg overflow-hidden">
                <Image src={item.img} alt={item.title} fill />
              </div>
              <li className="text-xl">{item.title}</li>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
