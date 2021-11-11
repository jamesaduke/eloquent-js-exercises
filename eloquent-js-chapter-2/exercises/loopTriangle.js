/* Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
####### */
let result = ""
for (let counter = 0; counter <=7; counter++) {
    console.log(result += "#");
}