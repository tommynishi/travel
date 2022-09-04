import { Link, ListItem, Textarea, UnorderedList } from "@chakra-ui/react"
import { UrlLinkList } from "../type/type";

export const UrlList = (children: UrlLinkList) => {
  return (
    <UnorderedList
      w={{base:"375px", md:"600px"}}
      minH='50px'
      maxH='300px'
      border="solid"
      borderColor="blue.700"
      bgColor='whiteAlpha.800'
      borderRadius="10px"
      ml='auto'
      mr='auto'
      mt='2rem'>
        {children.urlList.map((listItem) => 
          <ListItem key={listItem.disp} ml='1.5rem'>
            <Link href={listItem.url} color='green.700'>
              {listItem.disp}
            </Link>
          </ListItem>
        )}
    </UnorderedList>
  )
}