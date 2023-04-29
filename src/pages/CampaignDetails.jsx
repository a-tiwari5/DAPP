import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import {SectionWrapper} from "../hoc/index"
import Button from "../components/Button";
import Modal from "../components/Modal";
import { Buffer } from "buffer";
import { PublicKey } from '@solana/web3.js';
import * as web3 from '@solana/web3.js';
window.Buffer = Buffer;

const Donations = () => {

  return (
    <div className="w-[90%]">
      <motion.p variants={fadeIn("right", "spring", 0.5 * 1, 0.75)} className="m-5">
          <p className='text-white font-black md:text-[16px] font-medium text-[10px]'>Anonymous</p>
          <p className='text-white font-black md:text-[14px] font-medium text-[5px]'>$10 <span style={{fontSize:"12px", marginLeft:"10px"}}>23hrs</span> </p>
      </motion.p>
      <hr className='border-t-2 border-gray-500' />
    </div>
  )
}

const CampaignDetails = () => {
  const [showModal, setShowModal] = React.useState(false);

  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
      console.log('Phantom wallet found!');
      const response = await window.solana.connect();
      console.log(
        'Connected with Public Key:',
        response.publicKey.toString()
      );
    } else {
      alert('Solana object not found! Get a Phantom Wallet 👻');
    }
  };

  const getProvider = async () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        console.log("Is Phantom installed?  ", provider.isPhantom);
        return provider;
      }
    } else {
      window.open("https://www.phantom.app/", "_blank");
    }
  };



  async function transferSOL() {
    // Detecing and storing the phantom wallet of the user (creator in this case)
    var provider = await getProvider();
    console.log("provider", provider);
    console.log("Public key of the emitter: ",provider.publicKey.toString());

    // Establishing connection
    var connection = new web3.Connection(
      web3.clusterApiUrl('devnet'),
    );
    console.log(connection);

    // I have hardcoded my secondary wallet address here. You can take this address either from user input or your DB or wherever
    var recieverWallet = new web3.PublicKey("H1jYH2redLnzFwdHzTwmxarjTuHEc2gmu96RHZcsvQzy");

    
    var transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: recieverWallet,
        lamports: web3.LAMPORTS_PER_SOL //Investing 1 SOL. Remember 1 Lamport = 10^-9 SOL.
      }),
    );

    // Setting the variables for the transaction
    transaction.feePayer = await provider.publicKey;
    let blockhashObj = await connection.getRecentBlockhash();
    transaction.recentBlockhash = await blockhashObj.blockhash;

    // Transaction constructor initialized successfully
    if(transaction) {
      console.log("Txn created successfully");
    }
    
    // Request creator to sign the transaction (allow the transaction)
    let signed = await provider.signTransaction(transaction);
    // The signature is generated
    let signature = await connection.sendRawTransaction(signed.serialize());
    // Confirm whether the transaction went through or not
    await connection.confirmTransaction(signature);

    //Signature chhap diya idhar
    console.log("Signature: ", signature);
  }

  return (
    <div className="relative z-0 bg-primary h-full">
      <div className="px-40 pt-20 flex flex-wrap">
          <motion.p variants={fadeIn("right", "spring", 0.5*1, 0.75)} className="mb-5">
            <h2 className='text-white font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[30px]'>In Loving Tribute to Evelyn Dieckhaus</h2>
          </motion.p>
          <motion.div variants={fadeIn("right", "spring", 0.5*1.5, 0.75)} className="w-[60%] h-full flex flex-col">
            <motion.div
            variants={fadeIn("right", "spring", 0.5*1, 0.75)}
            className='w-full rounded-[20px] shadow-card' 
            >
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2ur9zNhioPkAJFv2sS0ftmBKTDvAJfN2D5_LaFjA8Tm8O9eef" className="w-[100%] object-contain rounded-[20px]" alt="" />
            </motion.div>
            <motion.p variants={fadeIn("right", "spring", 0.5 * 1, 0.75)} className="m-5">
            <p className='text-white font-black md:text-[16px] font-light text-[10px]'>Jill Talbert is organizing this fundraiser.</p>
            </motion.p>
            <hr className='border-t-2 border-gray-500' />
            <motion.p variants={fadeIn("right", "spring", 0.5 * 1, 0.75)} className="m-5">
            <p className='text-white font-black md:text-[16px] font-light text-[10px]'>Please join us in pouring love over the Dieckhaus family as they grieve the loss of their shining light, Evelyn. In the wake of this senseless tragedy, let us join hands in supporting our dear friends who selflessly love others so well.

  Thank you for your consideration. 100% of this fund will be sent to the Dieckhaus family.</p>
            </motion.p>
          <div className="w-full flex">
            <Button title="Donate"/>
            <Button title="Share"/>
          </div>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 0.5*2, 0.75)} className="w-[35%] bg-black-200 h-full flex flex-col items-center border border-indigo-600 ml-[10px] h-full rounded-2xl shadow-inner">
            <motion.p variants={fadeIn("right", "spring", 0.5 * 2, 0.75)} className="m-5">
            <p className='text-white font-black md:text-[16px] font-bold text-[10px]'>$279,532 <span style={{fontSize:"12px"}}> USD raised of $50,000 goal</span></p>
            </motion.p>
            <div class="w-[90%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: "45%" }}>
              </div>
            </div>
            <div className="w-full flex my-[20px]">
            <Button title="Share" />
            <button onClick={() => setShowModal(true)}>
              <Button title="DonateNow"/>
            </button>
            </div>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
        </motion.div>
        {/* <Modal/> */}
        <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black" >
                    Payment Configuration
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={checkIfWalletIsConnected}
                        >
                        Connect Your Wallet
                    </button>              
                </div>
                              
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                        onClick={() => {
                          transferSOL()
                          setShowModal(false)
                        }}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
      </div>
    </div>
  )
}

export default SectionWrapper(CampaignDetails,'campaignDetails')