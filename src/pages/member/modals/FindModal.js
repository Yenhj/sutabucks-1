import React, { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import FindImg from "asset/images/icon_find_sally.png";

const CloseModal = ({ isopen, setIsOpen }) => {
  const navigate = useNavigate();
  const clickSubmit = () => {
    alert("정말로 탈퇴하시겠습니까?");
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "35%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
    },
  };

  return (
    <ReactModal isOpen={isopen} style={customStyles}>
      <section>
        <div className="p-8 pt-4 border border-[#1B3C34]" aria-modal="true">
          <button
            className="absolute block top-7 right-7 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-6 space-y-6 ">
            {/* <div>
              <img
                src={FindImg}
                alt="coffee"
                className="w-56 mx-auto mt-16 mb-8"
              />
            </div> */}
            <span>회원정보에 등록한 휴대폰으로 인증</span>
            <form className=" flex flex-col flex- space-y-4 text-cente r">
              {" "}
              <label className="justify-items-start">이름</label>
              <input type="text" className=" border border-black" />
              <label>휴대폰</label>
              <input type="tel" />
              <button
                onClick={() => clickSubmit()}
                className="block w-full px-5 py-3 text-sm text-gray-100
                bg-[#1B3C34] rounded"
              >
                정말로 탈퇴 하시겠습니까?
              </button>
              <button
                className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                회원정보로 되돌아가기
              </button>
            </form>
          </div>
        </div>
      </section>
    </ReactModal>
  );
};

export default CloseModal;
