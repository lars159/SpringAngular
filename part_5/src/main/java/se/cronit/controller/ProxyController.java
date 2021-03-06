package se.cronit.controller;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import se.cronit.sr.SR;

@RestController
@RequestMapping("/api")
public class ProxyController {
    
	@RequestMapping(value="/traffic", method=RequestMethod.GET)
    public SR traffic(HttpServletRequest req ) {
	 
		RestTemplate restTemplate = new RestTemplate();
        SR quote = restTemplate.getForObject("http://api.sr.se/api/v2/traffic/messages?format=json", SR.class);
        return quote;
    }
}
