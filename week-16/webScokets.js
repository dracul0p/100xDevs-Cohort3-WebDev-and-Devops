// https://petal-estimate-4e9.notion.site/WebSockets-1477dfd10735802982becc925074b5f0

// websockets------------------>

// scaling ws servers ---->

// https servers state less
// state stored in db
// u can inc and dec srver acc to requirment due to state less nature of http servers

// ws can be state less or with db
// but most of time they are not state less

// sticky connectionn
//  in ws sticky conn in needed in this 2 people need to be onsame server if they want to chat with each other in same room  as we cant store socket in db it will be issue

// scaling:
// we ince and dec servers acc to requirments

// scalin for too large no of peopele : we use pub sub


