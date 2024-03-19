import React from 'react'
import { Link } from 'react-router-dom';
import CurrencyConverter from './CurrencyConverter';

export default function Home() {
    return (
        <div className="w-full flex-grow py-16 bg-[url('https://images.pexels.com/photos/14907356/pexels-photo-14907356.jpeg?auto=compress&cs=tinysrgb&w=600')]  font-quicksand ">
          <form className='flex flex-col justify-center items-center'
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-1/3 mb-1">
                        <CurrencyConverter />
                    </div>
                    <div className="relative w-1/3 h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-white  px-2 py-0.5 text-black font-bold"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-1/3 mt-1 mb-4">
                        <CurrencyConverter />
                    </div>
                    <button type="submit" className="w-1/3 bg-gradient-to-r from-cyan-800 to-purple-800  text-white font-bold px-4 py-3 rounded-lg">
                        Convert USD to INR
                    </button>
                </form>

        </div>
    );
}