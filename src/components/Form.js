import useForm from "../hooks/useForm"

const Form = ({ submit }) => {

    const initial_values = {
        search: "",
    }

    const [form, handleChange, reset] = useForm(initial_values)

    const handleSumit = (e) => {
        e.preventDefault()
        submit(form)
        reset()
    }


    return (
        <form onSubmit={handleSumit} >
            <label>Search:</label>
            <input
                type="text"
                name="search"
                onChange={handleChange}
                value={form.search}
            />
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default Form