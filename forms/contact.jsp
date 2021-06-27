<%@page import="java.io.*, java.util.*"%>
<%
try{
    String filename= request.getRealPath("/")+"\\forms\\requests\\request-message.txt";
    FileWriter fw = new FileWriter(filename,true);
    Date date = new Date();
    String requestMessage = "";
    requestMessage += "=============== NEW REQUEST ===============\n";
    requestMessage += "Date & Time: : " + date.toString() + "\n";
    requestMessage += "Name: " + request.getParameter("name") + "\n";
    requestMessage += "Email: " + request.getParameter("email") + "\n";
    requestMessage += "Subject: " + request.getParameter("subject") + "\n";
    requestMessage += "Message: " + request.getParameter("message") + "\n";
    requestMessage += "============ END OF NEW REQUEST ===========" + "\n\n";

    fw.write(requestMessage);       //appends the string to the file
    fw.close();
    
    out.println("OK");
}
catch(IOException ioe){
    System.err.println("IOException: " + ioe.getMessage());
}
%>