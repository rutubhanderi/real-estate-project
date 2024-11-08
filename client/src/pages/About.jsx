import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl xl:text-6xl">
              About Our Real Estate Marketplace
            </h2>
            <p className="mt-6 text-xl text-gray-500">
              Our real estate marketplace is designed to make finding your dream home or investment property easier than ever before. With a wide selection of properties, advanced search tools, and a team of dedicated professionals, we're here to help you every step of the way.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to={'/search'}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Browse Listings
                 
                </Link>
              </div>
              
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="px-4 py-8 sm:px-10">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}