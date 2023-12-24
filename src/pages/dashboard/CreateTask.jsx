import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxios from "./../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const CreateTask = () => {
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data: allTask = [], refetch } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const res = await axios.get("/allTask");
      return res.data;
    },
  });
  console.log(allTask);
  const onSubmit = (data) => {
    axios.post("/tasks", data).then((res) => {
      if (res.data.insertedId) {
        reset();
        toast.success("Your task submitted successfully");
        refetch();
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="mt-8">
          <div className="flex justify-center gap-5">
            <div className="form-control w-2/5">
              <label className="label">
                <span className="label-text text-xl">Task title</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Write your task title"
                {...register("title", { required: true })}
              />
              {errors.title && <span>This is required</span>}
            </div>
            <div className="form-control  w-2/5">
              <label className="label">
                <span className="label-text text-xl">Task Description</span>
              </label>
              <textarea
                className="input input-bordered"
                type="text"
                placeholder="Write the description here"
                {...register("description", { required: true })}
              />
              {errors.description && <span>this is require</span>}
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <div className="form-control w-2/5">
              <label className="label">
                <span className="label-text text-xl">Task deadline</span>
              </label>
              <input
                className="input input-bordered"
                type="date"
                placeholder="Write your task title"
                {...register("deadline", { required: true })}
              />
              {errors.deadline && <span>It is require</span>}
            </div>
            <div className="form-control  w-2/5">
              <label className="label">
                <span className="label-text text-xl">Task Priority</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Low,High,Moderate...."
                {...register("priority", { required: true })}
              />
              {errors.priority && <span>Please enter priority</span>}
            </div>
          </div>
          <button
            type="submit"
            className="border flex justify-center mx-auto btn btn-ghost btn-outline mt-3 text-2xl "
          >
            Create Task
          </button>
        </div>
      </form>
      <div className="flex justify-evenly mt-8">
        <ul>
          <li className="text-xl font-bold underline text-center">
            To-do list
          </li>
          {allTask &&
            allTask.map((item, index) => (
              <li className="text-left btn flex flex-col my-2" key={item._id}>
                {index + 1}.{item.title}
              </li>
            ))}
        </ul>
        <ul>
          <li className="text-xl font-bold underline text-center">
            Ongoing list
          </li>
        </ul>
        <ul>
          <li className="text-xl font-bold underline text-center">
            Completed list
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateTask;
