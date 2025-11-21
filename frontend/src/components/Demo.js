// import { Carousel, HStack, IconButton, Box } from "@chakra-ui/react"
import { Carousel, IconButton, Box, Text, VStack } from "@chakra-ui/react"
import {
  LuChevronLeft,
  LuChevronRight,
  // LuClock,
  LuPause,
  LuPlay,
} from "react-icons/lu"

const items = Array.from({ length: 5 })


const Demo = () => {
  return (
    <Carousel.Root
      autoplay={{ delay: 2000 }}
      slideCount={items.length}
      mx="auto"
      maxW="xl"
      mt="40"
    >
      {/* <HStack textStyle="sm" mb="4">
        <LuClock /> {"autoplay={{ delay: 2000 }}"} or {"autoplay={true}"}
      </HStack> */}
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box w="100%" h="150px" rounded="lg" fontSize="2.5rem" bg="#808080">
              <VStack spacing={2} textAlign="center">
                 <Text fontSize="2xl" fontWeight="bold" color="white">
                   Slide-{index + 1} Title:
                   Meal Of the day!
                 </Text>
                 <Text fontSize="md" color="gray.200">
                  This is a description for the slide.
                 </Text>
              </VStack>
              
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="2">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.AutoplayTrigger asChild>
          <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost">
            <Carousel.AutoplayIndicator
              paused={<LuPause />}
              play={<LuPlay />}
            />
          </IconButton>
        </Carousel.AutoplayTrigger>
        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

export default Demo;
