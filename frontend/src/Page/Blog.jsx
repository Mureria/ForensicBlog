import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import Comment from "../components/Comment";

const Blog = () => {
  return (
    <div className="container mx-auto flex flex-col mt-5 md:mt-10 px-4 md:px-7">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-[45px] font-bold">
          The horrifying crimes of Pedro Lopez
        </h1>
        <div className="flex gap-4 md:pt-5 items-center">
          <p className="text-sm">SHARE</p>
          <div className="flex items-center justify-center h-8 w-8 rounded-full border cursor-pointer hover:text-sky-500 hover:border-sky-500">
            <GrFacebookOption />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full border cursor-pointer hover:text-sky-500 hover:border-sky-500">
            <RiTwitterXFill />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full border cursor-pointer hover:text-sky-500 hover:border-sky-500">
            <MdEmail />
          </div>
        </div>
        <div className="md:flex justify-between items-start md:gap-10">
          <div className="basis-[90%]">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex gap-2 md:gap-4 pt-4">
                  <div className=" flex items-center justify-center w-9 h-9 text-white bg-sky-500 rounded-full">
                    <FaPencil />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Kevin Ireri</p>
                    <p className="text-xs text-slate-400">Forensic Scientist</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <p className="text-sm font-medium">Crime</p>
                  <p className="text-xs text-slate-400">26th Feb, 2024</p>
                </div>
              </div>
            </div>
            <div className="my-10">
              <p>
              <strong>Who Is Pedro Alonso Lopez?</strong> <br />
Pedro Alonso Lopez endured an early life of homelessness, violence and sexual abuse, becoming incarcerated during early adulthood. Upon his release, he eventually embarked on a killing spree where he targeted young girls from his home country, Peru and Ecuador. In 1980, he was apprehended in Ambato and ultimately charged with 110 murders, for which he plead guilty. Despite the scope of his crimes, he only served 14 years before being deported to Colombia, where he was institutionalized and then set free. His whereabouts are unknown.

<br /><strong>Early Life</strong> <br />
Lopez was born on October 8, 1948, in Santa Isabel, Colombia. His father, Medardo Reyes, was a member of the country’s right-wing party who was killed in La Violencia, the armed conflict of the era that would have repercussions for years to come. Lopez’s mother Benilda was three months pregnant with her son at the time of his father’s death. Pedro, who was reportedly the seventh child among 13 siblings, was polite as a boy and wanted to be a teacher according to his mother.

But Lopez later said his mother was physically abusive and a sex worker who also was assaulted by clients. Some reports have claimed that he was kicked out of the house by Benilda after fondling a younger sister while other accounts say he ran away. Lopez traveled to Bogota, the capital city of Colombia, where he became one of the homeless children known as “gamines.” He eventually joined a gang and smoked basuco, an impure form of cocaine. While on the streets, a stranger approached Lopez and offered him a bed, but instead took the youngster to an abandoned building and sexually assaulted him.

School for Orphans and Prison
When he was 10 years old, Lopez said that an elderly American couple found him on the streets and gave him a home, enrolling him at a school for orphans. But while there Lopez was molested by a teacher when he was 12, and he thus ran away once again. Lopez would eventually speak of wanting vengeance for his suffering as a child.

Having grown up on the streets, Lopez was arrested at 21 years old (some reports say he was 18) for stealing a car. Soon after his imprisonment, he was raped by at least two men and in retaliation killed his attackers with a makeshift knife. Accounts differ on whether he received additional jail time for the murders.

<br /><strong>Series of Murders</strong><br />
Upon his release from prison, it is then believed that Lopez started to seek out young girls, usually of Indigenous background and limited economic means. He made his way to Peru where he would lure his victims to remote areas, committing rape and murder, later reporting that he murdered dozens during the mid-to-late 1970s.

Lopez was caught by the Ayachucos community when he attempted to kidnap a nine-year-old, with the group submitting him to tribal law and attempting to bury him alive. A Western missionary convinced tribe members to turn Lopez over to the Peruvian police, who promptly deported him to Colombia without truly considering the crimes inflicted upon natives and the danger posed to society.

Captured in Ecuador
Lopez continued the murders and by the late ‘70s had made his way to Ecuador, where scores of girls began to go missing as well. Families tried to find the girls on their own, with one mother putting ads in newspapers about her missing daughter. In the Ambato region in 1980, vendor Carlina Ramon and a group of her peers caught him in Ecuador when he attempted to lure Ramon’s daughter from a busy market.

Once Lopez was in police custody, he initially refused to cooperate with authorities until investigator Pastor Cordova Gudino went undercover as a fellow inmate. Gaining Lopez’s trust, Gudino was able to get a confession from Lopez as well as details about sites where the victims were buried.

Police ultimately unearthed 57 bodies (some reports give the number as 53). Coupled with his confessions, Lopez was charged with 110 murders. He claimed to have been responsible for around 200 more deaths in the neighboring countries of Peru and Colombia.

On July 31, 1981, 33-year-old Lopez plead guilty to the murders of 57 girls and was imprisoned in Ambato, where he was officially diagnosed as a sociopath. Because of Ecuador’s laws, Lopez only received a maximum sentence of 16 years, much to the public’s enormous outrage. (Ecuador would later change its maximum prison sentence to 25 years.)

<br /><strong>Release and Deportation</strong><br />
On August 31, 1994, Lopez was released from Garcia Moreno prison after serving 14 years, having been released two years early for good behavior. He was summarily deported to Colombia, where authorities there attempted to convict him of a two-decades-old murder. But instead, Lopez was declared insane and, in 1995, institutionalized in a psychiatric facility.

In February 1998, he was declared sane and released under $50 bail with additional stipulations. He visited his elderly mother, who said that he asked for his inheritance and then, upon being informed of her poverty, sold her sole bed and chair to people on the street. Lopez then vanished, with concerns having risen about his possible connection to a 2002 murder. His whereabouts are unknown.
              </p>
            </div>
            <Comment/>
          </div>
          <div>
            <div className="hidden md:flex flex-col bg-slate-100 h-screen mt-16 p-5 rounded-md">
              <h1 className="font-bold mb-2">Crime</h1>
              <div className="space-y-2">
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <h1 className="font-bold mb-2">Fiction</h1>
              <div className="space-y-2">
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-sm hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
