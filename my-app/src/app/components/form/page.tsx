const Form = () => {
    return (
        <form className="flex flex-col gap-6 relative md:mt-7 sm:mt-7 exsm:mt-7">
            <div className="flex flex-col">
                <label>Your name</label>
                <input type="text" placeholder="Abc"/>
            </div>
            <div className="flex flex-col">
                <label>Email Address</label>
                <input type="text" className="formInput" placeholder="Abc@def.com"/>
            </div>
            <div className="flex flex-col">
                <label>Subject</label>
                <input type="text" className="formInput" placeholder="This is an optional"/>
            </div>
            <div className="flex flex-col">
                <label>Subject</label>
                <textarea  className="formInput" placeholder="This is an optional"  cols={10} rows={4}/>
            </div>
            <div>
            <button className="absolute left-0 h-12 w-[200px] bg-[#029FAE] rounded-[5px] font-poppins
            text-base text-white">Submit</button>
            </div>
        </form>
    );
};

export default Form;