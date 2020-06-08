import { Divider, Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import ContactCard from '../components/about/ContactCard';
import Layout from '../components/Layout';
import { MISSION_STRING, WHO_WE_ARE_STRING } from '../constants/about';

export default function About() {
  return (
    <Layout>
      <Flex align="center" justify="center" direction="column">
        <Flex
          w="100%"
          minH="250px"
          backgroundColor="#000"
          align="center"
          justify="center"
          color="#FFF"
          backgroundImage="url('https://source.unsplash.com/daily')"
        >
          <Heading>ABOUT</Heading>
        </Flex>
        <Flex w="100%" minH="500px" backgroundColor="#F7F7F2">
          <Flex
            direction="column"
            align="center"
            justify="center"
            marginTop={['21px', '21px', '0']}
            marginBottom={['21px', '21px', '0']}
          >
            <Flex direction={['column', 'column', 'row', 'row']}>
              <Heading
                display="inline-block"
                lineHeight="1"
                verticalAlign="top"
                textAlign="center"
              >
                MISSION
              </Heading>
              <Divider
                marginLeft={['98px', '98px', '25px', '25px']}
                marginRight={['97px', '97px', '25px', '25px']}
                marginTop={['25px', '25px', '0']}
                marginBottom={['25px', '25px', '0']}
                border="1px solid"
                borderColor="#BA2A2A"
                orientation="vertical"
              />
              <p style={{ whiteSpace: 'pre-wrap' }}>{MISSION_STRING}</p>
            </Flex>

            <Flex
              direction={['column', 'column', 'row', 'row']}
              marginTop="3em"
            >
              <Heading
                display="inline-block"
                lineHeight="1"
                verticalAlign="top"
                textAlign="center"
              >
                WHO WE ARE
              </Heading>
              <Divider
                marginLeft={['98px', '98px', '25px', '25px']}
                marginRight={['97px', '97px', '25px', '25px']}
                marginTop={['25px', '25px', '0']}
                marginBottom={['25px', '25px', '0']}
                border="1px solid"
                borderColor="#BA2A2A"
                orientation="vertical"
              />
              <p> {WHO_WE_ARE_STRING} </p>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          align="center"
          width="100%"
          minH="500px"
          maxH="500px"
          justify="center"
          direction="column"
          backgroundColor="#DEDEDA"
        >
          <Heading>CONTACT</Heading>
          <Flex w="1240px" margin="3em" justify="space-evenly">
            <ContactCard
              modalCard
              title="Business Owner"
              modalTitle="This is a modal!"
              blurb="Add your business to our list"
              imageUrl="https://source.unsplash.com/daily"
              imageAlt="Random image from unsplash"
            />
            <ContactCard
              mailtoCard
              title="General Inquiry"
              email="test@test.com"
              blurb="Send us an email and we'll be in touch"
              imageUrl="https://source.unsplash.com/daily"
              imageAlt="Random image from unsplash"
            />
            <ContactCard
              title="Volunteers"
              blurb="Join our group chat in Discord"
              imageUrl="https://source.unsplash.com/daily"
              imageAlt="Random image from unsplash"
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
