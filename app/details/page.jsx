import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { GrShareOption } from "react-icons/gr";

const page = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <div className="w-full h-14 text-black px-[16%] bg-gray-100 flex items-center ">
        <a
          href="../"
          className="flex items-center cursor-pointer hover:text-purple-600"
        >
          <IoIosArrowBack size={20} />
          Back
        </a>
      </div>

      <div className="mx-[16%]">
        <section className="w-full grid grid-cols-12 gap-3 py-5">
          <div className="col-span-9 h-[500px] rounded-2xl grid grid-cols-12 gap-1 overflow-hidden">
            <div className="col-span-9 bg-gray-200">
              <img
                src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2738826364rd-w1280_h960.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-3 grid grid-rows-3 gap-1">
              <div className="bg-gray-300 cursor-pointer hover:brightness-75 transition-all ease-in-out ">
                <img
                  src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f1134627828rd-w2048_h1536.webp"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-gray-400 cursor-pointer hover:brightness-75 transition-all ease-in-out ">
                <img
                  src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2020301146rd-w2048_h1536.webp"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-gray-500 cursor-pointer hover:brightness-75 transition-all ease-in-out ">
                <img
                  src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f3139238151rd-w2048_h1536.webp"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-1 border-[1px] col-span-3 h-[400px] rounded-2xl p-4 text-gray-700">
            <p className="text-[1.5rem] font-semibold ">Get in touch</p>
            <div className="flex items-center">
              Managed by:{" "}
              <img
                src="https://makeameme.org/media/templates/gigachad.jpg"
                alt=""
                className="w-8 h-8 rounded-full object-cover mx-2"
              />
              <span className="font-bold cursor-pointer hover:underline">
                Chad
              </span>
            </div>
            <div className="flex items-center">
              <HiOutlineMail size={20} className="mr-2" />
              {/* Email:{" "} */}
              <span className="cursor-pointer hover:underline">
                howdypartner@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <HiPhone size={20} className="mr-2" />
              {/* Email:{" "} */}
              <span className="cursor-pointer hover:underline">
                911 911 911
              </span>
            </div>
            <div className="flex items-center">
              <HiPhone size={20} className="mr-2" />
              {/* Email:{" "} */}
              <span className="cursor-pointer hover:underline">
                911 911 911
              </span>
            </div>
            <div className="flex items-center">
              <HiPhone size={20} className="mr-2" />
              {/* Email:{" "} */}
              <span className="cursor-pointer hover:underline">
                911 911 911
              </span>
            </div>
            <div className="flex items-center">
              <HiPhone size={20} className="mr-2" />
              {/* Email:{" "} */}
              <span className="cursor-pointer hover:underline">
                911 911 911
              </span>
            </div>
          </div>
        </section>

        <div className=" w-full grid grid-cols-12">
          <div className="col-span-9 bg-white flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-700 mr-2"></div>
              <p>For rent</p>
            </div>

            <div className="flex gap-3">
              <div className="grid place-items-center border-[1px] w-14 h-14 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                <BsHeart size={25} className="text-gray-700" />
              </div>
              <div className="grid place-items-center border-[1px] w-14 h-14 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                <GrShareOption size={25} className="text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-[16%]"></div>
    </div>
  );
};

export default page;
