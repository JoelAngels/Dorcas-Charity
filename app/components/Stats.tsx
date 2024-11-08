import React from "react";
import { Users, GraduationCap, Heart, School } from "lucide-react";

export default function Stats() {
  return (
    <div className="bg-rose-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-10 w-10 text-rose-600" />
            </div>
            <div className="mt-3">
              <div className="text-4xl font-bold text-gray-800">1,200+</div>
              <div className="text-gray-600">Students Supported</div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <GraduationCap className="h-10 w-10 text-rose-600" />
            </div>
            <div className="mt-3">
              <div className="text-4xl font-bold text-gray-800">95%</div>
              <div className="text-gray-600">Graduation Rate</div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Heart className="h-10 w-10 text-rose-600" />
            </div>
            <div className="mt-3">
              <div className="text-4xl font-bold text-gray-800">50+</div>
              <div className="text-gray-600">Partner Schools</div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <School className="h-10 w-10 text-rose-600" />
            </div>
            <div className="mt-3">
              <div className="text-4xl font-bold text-gray-800">$500K</div>
              <div className="text-gray-600">Scholarships Awarded</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
