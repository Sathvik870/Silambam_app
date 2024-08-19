import React from 'react';
import './CourseOutcomePage.css';

const CourseOutcomePage = () => {
    const sections = [
        {
          text: "The first stages of Silambam practice are meant to provide a foundation for fighting, and also preparatory body conditioning. This includes improving flexibility, agility, and hand-eye coordination, kinesthetic awareness, balance, strength, speed, muscular and cardiovascular stamina.",
          image: "/images/1img.jpg",
        },
        {
          text: "Silambam's main focus is on the bamboo staff. The length of the staff depends on the height of the practitioner. Ideally, it should just touch the forehead about three fingers from the head, typically measuring around 1.68 meters (five and a half feet). Different lengths may be used depending on the situation. For instance, the sedikuchi or 3-foot stick can be easily concealed. Separate practice is needed for staffs of different lengths. Listed below are some of the weapons used in Silambam.",
          image: "/images/3img.jpg",
        },
        {
          text: "Silambam made its first historical appearance in the eyes of the world through the auspices of the committee of the United Nations Assembly, which recommended Silambam Asia for United Nations status. The inauguration was held at the United Nations Headquarters in New York, United States on 21 January 2019. However, the China-Taipei government representatives raised questions concerning border conflicts in ancient records pertaining to Silambam. A request was lodged for the organization of Silambam Asia to resolve with ratification of the raised problems by member states. On 30 January 2019, substantive work was completed and concluded for Silambam Asia with Special Status in the United Nations",
          image: "/images/2img.jpg",
        },
        {
          text: "References in the Silappadikaram and other works of the Sangam literature show that Silambam has been practiced since at least the 4th century BC. It derives from the Tamil word silam, meaning hill. The term silambambu referred to a particular type of bamboo from the Kurinjimala (kurinji hills) in present-day Kerala. Thus silambam was named after its primary weapon, the bamboo staff. It may have earlier used for self-defense and to ward off animals in the Kurinji hills and later evolved into the present-day martial art.Bamboo staffs as well as swords, pearls and armor were in great demand from foreign traders",
          image: "/images/4img.jpg",
        },
      ];
      

  return (
    <div className="course-outcome-page">
      <h1>Course Outcome</h1>
      {sections.map((section, index) => (
        <div className={`section ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="text">
            <p>{section.text}</p>
          </div>
          <div className="image">
            <img src={section.image} alt={`Course Outcome ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseOutcomePage;
