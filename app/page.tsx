import Image from "next/image";


export default function Home() { 
  return ( <main> 
    <h1>Welcome to CourseHub</h1> 
    <Image
    src="/images/courses.jpg"
    alt="Students learning"
    width={800}
    height={450}
    />
    <p>Learn modern technology skills with practical courses.</p> 
    </main> 
    );
  }
