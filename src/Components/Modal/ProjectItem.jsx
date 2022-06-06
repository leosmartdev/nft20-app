import React, { useState } from "react";

const ProjectItem = ({ show, handleHide, project, selectPool }) => {
  return (
    <div data-v-7834dab6="">
      <div
        data-v-7834dab6=""
        className="
                        flex
                        space-x-4
                        items-center
                        mt-6
                        cursor-pointer
                        hover:bg-gray-900 hover:bg-opacity-25
                        py-4
                        px-4
                        rounded-l-lg
                        "
                        onClick={() => selectPool(project)}>
        <i
          data-v-7834dab6=""
          className="
                            bg-blue-500
                            rounded-full
                            bg-white
                            h-16
                            w-16
                            mr-4
                            flex
                            items-center
                            justify-center
                            shadow-sm
                        "
        >
          <img
            data-v-7834dab6=""
            src={project.logo_url}
            alt=""
            className="rounded-full object-cover"
          />
        </i>
        <div data-v-7834dab6="">{project.name}</div>
      </div>
    </div>
  );
};
export default ProjectItem;
