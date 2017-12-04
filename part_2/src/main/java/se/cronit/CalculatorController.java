package se.cronit;
 
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpMethod;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

@RestController 
@RequestMapping("/")
public class CalculatorController {
	 
	@Autowired
	CalculatorService cService; 
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
    public int add(Integer a, Integer b) {
		 return cService.add(a,b);
    }
	
	
	@ExceptionHandler(NullPointerException.class)
	public String exceptionHandler(NullPointerException e, HttpServletResponse res) {
		res.setStatus(404);
			return "Bad input";		 
		
	} 

}
