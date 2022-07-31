import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  Text,
  useBreakpointValue,
  usePrefersReducedMotion
} from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import pic from '../portrait.jpg'
import { motion } from "framer-motion";
import SplitText from "../components/SplitText"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import SvgDoodleLaughGuy from "../components/svg/SvgDoodleLaughGuy";

const text = `Wait...you actually want to know more about me? I must say, I'm flattered!

Well, if you MUST know, I'm an American-Canadian self-taught programmer, developer, graphics designer, computer geek, IT guy, and *checks notes* warm body with a pulse.

For the past couple of years I've been studying and refining my coding skills. Through it all, I ended up writing quite a bit of software in some form or another. I found I rather enjoyed it, especially whenever I injected my own bits of humor and creativity into the mix. After all, I believe if you're going to code something, you might as well have fun with it and amuse yourself - and others, too!

Right now, I'm just livin' and chillin' both on and off the computer. That said, I'm available for hire to work on some cool projects or other tech-related things. Feel free to check out my GitHub to see some of my works, or poke around. Enjoy!`

export default function PageAbout() {
  const noAnim = usePrefersReducedMotion()
  const useSplitText = useBreakpointValue({ base: false, xl: true })
  return (
    <>
      <PageHeader title="ABOUT" />
      <Container maxWidth='5xl' marginBottom='10'>
        <Flex
          flexDirection={{ base: "column-reverse", xl: 'unset' }}
          justifyContent={{ base: 'center', xl: 'space-between' }}
          alignItems={{ base: 'center', xl: 'flex-start' }}
        >
          <Flex direction='column' alignItems='center'>
            <Box
              as={motion.div}
              variants={{
                initial: {},
                active: { transition: { staggerChildren: 0.005 } }
              }}
              initial={noAnim ? undefined : 'initial'}
              animate={noAnim ? undefined : 'active'}
            >
              {useSplitText ?
                <SplitText
                  text={text}
                  as={motion.span}
                  variants={{
                    initial: {
                      opacity: 0
                    },
                    active: {
                      opacity: 1,
                      transition: { duration: 1 }
                    }
                  }}
                /> :
                <Text
                  whiteSpace='pre-line'
                  as={motion.p}
                  initial={noAnim ? undefined : { opacity: 0 }}
                  animate={noAnim ? undefined : {
                    opacity: 1,
                    transition: {
                      duration: 2,
                      delay: 2
                    }
                  }}
                >
                  {text}
                </Text>
              }
            </Box>
            <Button
              height='auto'
              maxWidth='max-content'
              whiteSpace='break-spaces'
              marginTop='20'
              paddingY={{ base: '5', sm: '10' }}
              onClick={() => { window.location.hash = 'contact' }}
              as={motion.button}
              initial={noAnim ? undefined : { opacity: 0, y: 30 }}
              animate={noAnim ? undefined : {
                opacity: 1,
                y: [30, -10, 10, 0],
                transition: { delay: 4 }
              }}
              whileHover={noAnim ? undefined : {
                scale: 1.2,
                rotate: [0, 10, -10, 10, -10, 10, -10],
                transition: { duration: 0.8 }
              }}
              leftIcon={
                <Box
                  as={motion.div}
                  animate={noAnim ? undefined : {
                    x: -10,
                    transition: { ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
                  }}
                >
                  <BsArrowRightShort fontSize='32' />
                </Box>
              }
              rightIcon={
                <Box
                  as={motion.div}
                  animate={noAnim ? undefined : {
                    x: 10,
                    transition: { ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
                  }}
                >
                  <BsArrowLeftShort fontSize='32' />
                </Box>
              }
            >
              You should totally get in touch with me
            </Button>
          </Flex>
          <Spacer minWidth='48' minHeight='20' />
          <Box position='relative'>
            <Image
              alt="It's a picture of me. Don't worry, you're not missing much."
              title="Hey wait a minute...that's me!"
              src={pic}
              objectFit='contain'
              maxWidth='300px'
              maxHeight='300px'
              borderColor='themed.primary'
              borderWidth='1px'
              borderStyle='solid'
              borderRadius='200px 30px 225px 15px/30px 225px 20px 255px'
              as={motion.img}
              initial={noAnim ? undefined : { scale: 0, rotate: 0 }}
              animate={noAnim ? undefined : {
                scale: 1,
                rotate: [0, (360 * 7) + 45, (360 * 7)],
                transition: {
                  delay: 1,
                  scale: {
                    duration: 2
                  },
                  rotate: {
                    duration: 3,
                    times: [0, 0.5, 1],
                    ease: 'anticipate'
                  }
                }
              }}
            />
            <Box
              display={{ base: 'none', xl: 'unset' }}
              width='48'
              height='48'
              position='absolute'
              bottom='-200px'
              left='-200px'
              as={motion.div}
              variants={{
                hide: { scaleX: 0 },
                show: { scaleX: 1, transition: { delay: 5, type: 'spring', bounce: 0.8 } }
              }}
              initial={noAnim ? undefined : 'hide'}
              animate={noAnim ? undefined : 'show'}
            >
              <SvgDoodleLaughGuy />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}