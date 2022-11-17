import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSignUp = (data) => {
        console.log(data);
    }
    return (
        <section className='my-8'>
            <div className='max-w-md mx-auto shadow-lg p-6 rounded-md'>
                <h3 className="text-2xl font-bold capitalize text-center py-3 text-black">login</h3>
                <form onSubmit={handleSubmit(handleSignUp)} className='text-black'>
                    <div className="form-control mb-2">
                        <label htmlFor="email" className='mb-1 ml-1'>Name</label>
                        <input type="text" {...register('name', { required: 'name required' })} placeholder='your name' className='input input-bordered' />
                        {errors.email && <p role="alert" className='text-warning'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control mb-2">
                        <label htmlFor="email" className='mb-1 ml-1'>Email</label>
                        <input type="email" {...register('email', { required: 'email required' })} placeholder='email address' className='input input-bordered' />
                        {errors.email && <p role="alert" className='text-warning'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control mb-2">
                        <label htmlFor="password" className='mb-1 ml-1'>password</label>
                        <input type="password" {...register('password', { required: 'password required' },
                            { minLength: { value: 6, message: 'minimum password six or longer' } })} placeholder='password' className='input input-bordered' />
                        <label className='label mb-1 ml-1'> <span className='label-text'>Forget Password ?</span></label>
                        {errors.password && <p role="alert" className='text-warning'>{errors.password?.message}</p>}
                    </div>

                    <div>
                        <input type="submit" value="login" className='w-full btn text-white btn-neutral mt-4 text-lg' />
                    </div>
                </form>
                <p className="capitalize py-2 text-sm text-center text-black">already have an account? <Link to="/login" className='text-primary'>login now</Link></p>
                <div className="divider text-neutral divide-black">OR </div>
                <button type='button' className='btn btn-outline w-full mt-2 text-lg text-neutral'>continue with google</button>
            </div>
        </section>
    );
};

export default SignUp;