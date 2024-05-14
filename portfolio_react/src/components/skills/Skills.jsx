import './Skills.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaSass } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import { FaFigma } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsWordpress } from 'react-icons/bs'
import { DiScrum } from 'react-icons/di'
import { SiTailwindcss } from "react-icons/si";

import { SiMongodb } from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills">
      <div className="container skills__container">
        <span className="header_span">A list of my technical skills</span>
        <h2>My skills</h2>
        <div className="skills__frontend">
          <div className="skills__content">
            <article className="skills__details">
              <AiOutlineHtml5 className="skills__icon" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="skills__details">
              <DiCss3 className="skills__icon" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="skills__details">
              <FaSass className="skills__icon" />
              <h4>Sass</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <SiJavascript className="skills__icon" />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <FaReact className="skills__icon" />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <TbBrandReactNative className="skills__icon" />
              <h4>React-Native</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <SiTypescript className="skills__icon" />
              <h4>TypeScript</h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="skills__details">
              <TbBrandNextjs className="skills__icon" />
              <h4>NextJS</h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="skills__details">
              <FaNodeJs className="skills__icon" />
              <h4>NodeJS</h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="skills__details">
              <MdDesignServices className="skills__icon" />
              <h4>UX | UI</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <FaFigma className="skills__icon" />
              <h4>Figma</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <BsWordpress className="skills__icon" />
              <h4>WordPress</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="skills__details">
              <DiScrum className="skills__icon" />
              <h4>Scrum</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <SiTailwindcss className="skills__icon" />
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills__details">
              <SiMongodb className="skills__icon" />
              <h4>MongoDB</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills