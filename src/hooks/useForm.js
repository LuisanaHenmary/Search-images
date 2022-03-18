import { useState } from 'react'

const useForm = (initial_values) => {

  const [form, setForm] = useState(initial_values)

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {

    setForm(initial_values)

  }

  return [form, handleChange, reset]
  
}

export default useForm