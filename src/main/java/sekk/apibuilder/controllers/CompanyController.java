package sekk.apibuilder.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
  public ResponseEntity<?> getCompanyById(@PathVariable String id) {
    Optional<Company> company = companyService.getCompanyById(id);
    
    if(company.isEmpty()) {
      return ResponseEntity.status(404).body(null);
    } else {
      return ResponseEntity.ok(company);
    }
  }

  @GetMapping("/affid/{affid}")
  public ResponseEntity<?> getCompanyByAffid(@PathVariable String affid) {
    Optional<Company> company = companyService.getCompanyByAffid(affid);

    if(company.isEmpty()) {
      return ResponseEntity.status(404).body(null);
    } else {
      return ResponseEntity.ok(company);
    }
  }

  @PostMapping
  public ResponseEntity<?> createCompany(@RequestBody Company company) {
    return ResponseEntity.status(201).body(companyService.createCompany(company));
  }

  @PutMapping
  public ResponseEntity<?> updateCompany(@RequestBody Company company) {
    if(company.getId().isEmpty()) {
      return ResponseEntity.badRequest().body(null);
    }

    Optional<Company> updatedCompany = companyService.updateCompany(company);
    if(updatedCompany.isEmpty()){
      return ResponseEntity.status(404).body(null);
    } else {
      return ResponseEntity.ok(updatedCompany);
    }
  }

  @DeleteMapping
  public ResponseEntity<?> deleteCompany(@RequestBody Company company) {
    if(company.getId().isEmpty()) {
      return ResponseEntity.badRequest().body(null);
    }

    Optional<Company> deletedCompany = companyService.deleteCompany(company);
    if(deletedCompany.isEmpty()){
      return ResponseEntity.status(404).body(null);
    } else {
      return ResponseEntity.ok(deletedCompany);
    }
  }
  
}
