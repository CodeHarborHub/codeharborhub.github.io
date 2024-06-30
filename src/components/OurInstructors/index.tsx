import React from 'react';
import styled from 'styled-components';
import { instructors } from '../../database/Instructor';

// Styled components for styling the section, title, instructor grid, and cards
const Container = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 40px;
`;

const InstructorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const InstructorCard = styled.div`
  width: 200px;
  border-radius: 10px;
  padding: 2px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const InstructorImage = styled.img`
  width: 100%;
  border-radius: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const InstructorInfo = styled.div`
  padding: 20px;
`;

const InstructorName = styled.h3`
  margin: 0;
`;

const InstructorTitle = styled.p`
  margin: 5px 0 10px;
  font-style: italic;
`;

// Main component function to render the instructors section
export default function OurInstructors() {
  return (
    <Container>
      <Title>Meet Our Instructors</Title>
      {/* Grid layout for displaying instructors */}
      <InstructorGrid>
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id}>
            {/* Instructor image */}
            <InstructorImage src={instructor.imageUrl} alt={instructor.name} />
            {/* Instructor information */}
            <InstructorInfo>
              <InstructorName>{instructor.name}</InstructorName>
              <InstructorTitle>{instructor.title}</InstructorTitle>
              {/* Optional: Bio can be added here */}
              {/* <InstructorBio>{instructor.bio}</InstructorBio> */}
            </InstructorInfo>
          </InstructorCard>
        ))}
      </InstructorGrid>
    </Container>
  );
};
