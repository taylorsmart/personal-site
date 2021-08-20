import Image from 'next/image'

export default function ExperienceList ({skill, index}) {

  let skillName = skill.name;
  let skillImage = skill.image;
  
  return (
    <tr className="text-center hover:bg-gray-100">
      <td className="p-1 md:p-4   w-1/2">
        <div className="flex justify-end ">
          <Image
            src={skillImage}
            alt={skillName}
            width={45}
            height={45}
          ></Image>
        </div>
      </td>
      <td className="p-3 w-1/2">
          <article className="prose-sm">
            <p className="prose text-left ">
              {skillName}
            </p>
          </article>
      </td>
    </tr>
  )
} 