# git repo init script for Visual
execute_process(
  COMMAND "C:/Program Files (x86)/Git/bin/git.exe" clone -n -b master
          -- "git://github.com/OSEHRA-Sandbox/Product-Management" "D:/wamp/www/Product-Management/Visual//Product-Management/Visual"
  )
if(EXISTS "D:/wamp/www/Product-Management/Visual//Product-Management/Visual/.git")
  execute_process(
    COMMAND "C:/Program Files (x86)/Git/bin/git.exe" config core.autocrlf true
    WORKING_DIRECTORY "D:/wamp/www/Product-Management/Visual//Product-Management/Visual"
    )
  execute_process(
    COMMAND "C:/Program Files (x86)/Git/bin/git.exe" checkout
    WORKING_DIRECTORY "D:/wamp/www/Product-Management/Visual//Product-Management/Visual"
    )
endif()
