# @open-twit/common

A react component library to be used with the open-twit client.

# Components
* Icon - a component for handling material-ui icons with a custom color palette
* BaseInput
* IconInput
* PostInput - a component for handling post creation
* PostDisplay
  * PostDisplayHeader - Contains the name, verified mark, handle, and options menu
    * Name, verified mark and handle can be taken as inputs
    * PostDisplayOptions - The options menu
  * PostDisplayContent - Contains the content. Could be image, video, or link
    * PostDisplayContentText - Contains the text of the post content
    * PostDisplayContentMedia - Contains the image/video of the post media
    * PostDisplayContentReferencedMedia - Contains the image/video and a brief description from the source website. This element will also act as a link
  * PostDisplayFooter - Contains the interaction buttons for the post
    * PostDisplayFooterInteraction - Clickable icon button with text 
    * PostDisplayFooterCustomInteraction