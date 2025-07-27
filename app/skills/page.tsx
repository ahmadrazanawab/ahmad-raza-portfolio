import Cart from '../components/Cart'

const page = () => {
    return (
        <section className='pt-20 bg-[#D8E2EC]'>
            <div className='mt-10 pb-10'>
                <h4 className="text-center text-4xl font-bold mb-4">My Skills</h4>
                <Cart />
            </div>
        </section>
    )
}

export default page
