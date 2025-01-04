import { useRouter } from 'next/router';



const Projects = () =>{
    const router = useRouter();

    return(
        <>
<div className="container mx-auto p-4"> {/* Added container for better layout */}
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.image && (
        <div className="mb-4 relative h-[500px] w-full"> {/* Added relative wrapper for image and fixed height */}
          <Image
            src={project.image}
            alt={project.title}
            fill // Use fill for responsive images
            style={{objectFit:"contain"}}
            className="rounded-xl"
            priority // Prioritize the image for loading
          />
        </div>
      )}
      <p className="text-gray-700 leading-relaxed">{project.description}</p>
      {project.liveDemoLink && (
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent w-fit mt-4 text-center p-2 rounded-xl text-black link-project inline-block"
        >
          Live Demo
        </a>
      )}
      <button onClick={() => router.back()} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block">Go Back</button>
    </div>
        </>
    )
}

export default Projects;