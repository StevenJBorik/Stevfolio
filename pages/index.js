import NextLink from 'next/link' 
import { Container, Box, Button, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear} from '../components/bio'
import { Layout } from '../components/layouts/article';
const Page = () => {
    return (

            <Container>
                    <Box borderRadius="lg" bg="green.500" p={2.5} mb={6} align="center">
                        A professional both in and out of the armchair.  
                    </Box>
                    <Box display = {{ md: 'flex' }}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">
                                Steven Borik
                            </Heading>
                            <p>Software Engineer | Multi-Instrumentalist | Retired Semi-Pro Athlete</p>
                        </Box>
                        <Box flexShrink ={0} 
                        mt={{ base:4, md:0 }}
                        ml ={{ md:6 }} 
                        align="center">
                            <Image borderColor="whiteAplpha.800"
                            borderWidth={2} 
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/stevenp.jpg"
                            alt="Profile Image" />
                        </Box>
                    </Box>
                <Section delay={0.1}>
                    <Heading as ="h3"variant="section-title">
                        Me
                    </Heading>
                    <Paragraph>
                        I'm a full stack software developer with 7 years of industry experience. I started my IT 
                        career doing L1 Linux System Administration and Network Monitoring at GoldenFrog, and transitioned to the dev world at JCPenney.
                        I gained full stack experience through designing MVC and React Progressive Web Applications, and
                        DevOps and CI/CD experience in monthly deployments of the JCPenney's Point of Sale Application.
                        Currently I work primarily with .NET applications for MillerKnoll, 
                        handling critical interactions on POS, WMS, ERP, and Marketing systems. 
                    </Paragraph>
                    <Box align="center" my="4">
                        {/* <NextLink href="works">
                            <Button rightIcon={<ChevronRightIcon />} bg="green.500"> 
                                Projects 
                            </Button>
                        </NextLink> */}
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Timeline
                    </Heading>
                    <BioSection>
                        <BioYear>1995</BioYear>  
                        Born in Detroit, Michigan  
                    </BioSection>
                    <BioSection>
                        <BioYear>2003</BioYear>  
                        Moved to Phoenix, Arizona 
                    </BioSection>
                    <BioSection>
                        <BioYear>2006</BioYear>  
                        Moved to Dallas, Texas  
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>  
                        Graduated from the University of Texas at Dallas - B.S. Management Information Systems    
                    </BioSection>
                    BioSection>
                        <BioYear>2022</BioYear>  
                        Moved to Austin, Texas
                        </BioSection>
                     <BioSection>
                        <BioYear>2024</BioYear>  
                        Settled in Colorado Springs, CO 
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Free Time Fun
                    </Heading>
                    <Paragraph>
                        Musicianing, Coding, Boxing, German Shepherd, Ultimate Frisbee
                    </Paragraph>
                </Section>
            </Container>
       
    )
}
export default Page
