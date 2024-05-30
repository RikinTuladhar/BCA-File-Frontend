import React from "react";

const AllFiles = () => {
  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                File Name
              </th>
              <th scope="col" class="px-6 py-3">
                Semester
              </th>

              <th scope="col" class="px-6 py-3">
                View
              </th>
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th class="px-6 py-4"> 1</th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllFiles;
