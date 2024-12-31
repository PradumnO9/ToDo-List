const EditTask = () => {
  return (
    <div>
      <form className="flex items-center w-full my-2 mx-3">
        <input
          className="ml-2 px-3 py-1 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          placeholder="type..."
        />
        <button className="px-3 py-1 rounded-r-lg bg-blue-400 text-white text-lg font-bold hover:opacity-85">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditTask;
