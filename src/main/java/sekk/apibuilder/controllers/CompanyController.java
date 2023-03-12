package sekk.apibuilder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import sekk.apibuilder.models.Company;
import sekk.apibuilder.services.CompanyService;

@RestController
@RequestMapping("/companies")
public class CompanyController {
  
  @Autowired
  private CompanyService companyService;

  @GetMapping
  public List<Company> getAllCompanies() {
    return companyService.getAllCompanies();
  }

  @GetMapping("/id/{id}")
  public Company getCompanyById(@PathVariable String id) {
    return companyService.getCompanyById(id);
  }

  @GetMapping("/affid/{id}")
  public Company getCompanyByAffid(@PathVariable String affid) {
    return companyService.getCompanyById(affid);
  }

  @PostMapping
  public Company createCompany(@RequestBody Company company) {
    return companyService.createCompany(company);
  }
  
}
