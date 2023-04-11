package sekk.apibuilder.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sekk.apibuilder.models.ApiBody;
import sekk.apibuilder.models.Company;
import sekk.apibuilder.services.CompanyService;

@RestController
@RequestMapping("/custom/api")
public class ApiController {
  
  @Autowired
  private CompanyService companyService;

  @GetMapping("/{id}")
  public ResponseEntity<?> getCompanyApi(@PathVariable String id) {
    Optional<Company> company = companyService.getCompanyById(id);
    ArrayList<ApiBody> apiBody = company.get().getApiBody();
    return ResponseEntity.ok(apiBody);
  }
}
