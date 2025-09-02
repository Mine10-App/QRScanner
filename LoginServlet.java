import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class LoginServlet extends HttpServlet {
    private static final String USERS_FILE = "/path/to/users.txt"; // file path

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        boolean validUser = checkCredentials(email, password);
        
        if (validUser) {
            response.sendRedirect("dashboard.html"); // success
        } else {
            PrintWriter out = response.getWriter();
            out.println("<html><body>");
            out.println("<h3 style='color:red;'>Invalid login. Try again.</h3>");
            out.println("<a href='login.html'>Back to Login</a>");
            out.println("</body></html>");
        }
    }
    
    private boolean checkCredentials(String email, String password) {
        try (BufferedReader br = new BufferedReader(new FileReader(USERS_FILE))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(","); // format: email,password
                if (parts.length == 2 && parts[0].equals(email) && parts[1].equals(password)) {
                    return true;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return false;
    }
}
