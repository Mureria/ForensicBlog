import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import PostCard from '../components/PostCard';


const Home = () => {
  return (
    <div className="container mx-auto flex justify-between items-start mt-5 md:mt-10 gap-20 px-4">
        <div className='flex-1'>
            <div className='relative rounded-md'>
                <img src="https://imgs.search.brave.com/UKXkyHmPNCug4qvDt4jSpQmakvFr6xhbdr5xFcKYHHY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODM4/Mjc3ODIyL3Bob3Rv/L2ZpbmdlcnByaW50/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UmY1VHNXZkNp/N1VtUlpnUXljVmVE/QjdJblloS2pEUVhB/ME52VUs4ZlIwQT0" alt="" className='w-full h-[400px] object-cover md:rounded-md' />
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 rounded-md'>
                    <div className='flex items-baseline'>
                        <h1 className='text-white font-semibold text-3xl md:text-5xl ml-7 mt-[270px] text-wrap'>Binary code behind a blue digital fingerprint</h1>
                    </div>   
                </div>
            </div>
            <div className='py-5 bg-blue-500 mt-4 md:mt-10'>
                <p className='font-bold text-xl px-7 text-white'>Recent Posts</p>     
            </div>
            <div className='my-10 grid md:grid-cols-3 gap-3'>
            <PostCard
            image='https://images.pexels.com/photos/6069510/pexels-photo-6069510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='CRIME SCENE RECONSTRUCTION'
            author='Michael'
            date='3rd March, 2024'
            />
            <PostCard
            image='https://imgs.search.brave.com/cMwmdTspzrwrZS4XSXIoCUepKAMJVdBUG-1sZkPVtYs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90cnVl/Y3JpbWVzZXZlbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvUGVkcm8t/QWxvbnNvX0FydGlj/bGVfMDItNDAweDMw/NC5qcGVn'
            title='THE HORRIFYING CRIMES OF PEDRO LOPEZ'
            author='Omwami'
            date='26th Feb, 2024'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1649941437444-da3776ab96f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UEFUSE9MT0dZfGVufDB8fDB8fHww'
            title='FORENSIC PATHOLOGY: A COMPLETE OVERVIEW'
            author='Nakhumicha'
            date='19th Feb, 2024'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1602549179763-ce6c9df961b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='DIFFERENCE BETWEEN HAIR AND FIBER'
            author='Wairuinge'
            date='12th Feb, 2024'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1631556761867-50fd6cf7f0bb?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='HOW TO BECOME FORENSIC SEROLOGIST?'
            author='Mary'
            date='5th Feb, 2024'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1603735197568-170adafe8eb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='IDENTIFICATION OF BIOLOGICAL TRACES'
            author='Tom'
            date='26th Jan, 2024'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='WHAT IS CYBER FORENSICS?'
            author='Omwami'
            date='21st Jan, 2024'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1620077399971-431e7ea0cf0c?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='POSTTRAUMATIC STRESS DISORDER(PTSD): SYMPTOMS, CAUSES AND TREATMENT'
            author='Ireri'
            date='14th Jan, 2024'
            />
            <PostCard
            image='https://imgs.search.brave.com/410BQ4_JlvpeHrVbaPj-9_6oe720Vf4XBaFbgcAg1H4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZm9yZW5z/aWNmaWVsZC5ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzAzL2ltYWdlLnBu/Zz9yZXNpemU9MjQw/LDI3MiZzc2w9MQ'
            title='TAKAHIRO SHIRASHI: TWITTER KILLER'
            author='Wairuinge'
            date='7th Jan, 2024'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='ANCIENT DNA:HOW DO YOU EXTRACT IT'
            author='Deborah'
            date='31st Dec, 2023'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1611225664647-c01866a22c9c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='100+ MCQs ON FINGERPRINT'
            author='Michael'
            date='24th Dec, 2023'
            />
            <PostCard
            image='https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RFJPV05JTkd8ZW58MHx8MHx8fDA%3D'
            title='DROWNING IN FORENSIC MEDICINE'
            author='Karen'
            date='17th Dec, 2023'
            />
            </div>
            <div className='max-w-[200px] mx-auto border border-sky-500 px-4 py-3 text-center font-medium hover:bg-sky-500 hover:text-white ease-in-out duration-500 mb-20'>
            <button>More Posts</button>
            </div>
            
        </div>
        <div className='hidden md:block'>
        <div className='font-semibold text-xl pb-2'>
                <h2>Search:</h2>
            </div>
            <div className='flex border items-center'>
                <input type="text" placeholder='Search' className=' px-4 outline-none' />
                <div className='border px-4 py-2 bg-blue-400 text-xl text-white'>
                    <IoIosSearch />
                </div> 
            </div>
            <div className='mt-4 font-semibold text-xl py-2'>
                <h2>Category:</h2>
            </div>
            <div className='flex border items-center py-2 text-gray-400'>
                <select id="cars" className='w-full outline-none px-3'>
                    <option>Select Category</option>
                    <option value="volvo">Crime News</option>
                    <option value="saab">Cyber Forensics</option>
                    <option value="mercedes">Fiction</option>
                    <option value="audi">Blood Examination</option>
                </select>
            </div>
            <div>

            </div>
        </div>
    </div>
    )
}

export default Home