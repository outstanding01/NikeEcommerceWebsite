

const Button = ({label,iconURL}) => {
  return (
    <button className="flex justify-center items-center bg-coral-red gap-2 px-7 py-4 border font-montserrat text-lg leading-none text-white border-coral-red rounded-full">
        {label}
        <img src={iconURL} alt="arrow right"
        className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button