package sekk.apibuilder.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sekk.apibuilder.models.Company;
import sekk.apibuilder.repositories.CompanyRepository;

@Service
public class CompanyService {

  @Autowired
  private CompanyRepository companyRepository;

  public List<Company> getAllCompanies() {
    return companyRepository.findAll();
  }

  public Company getCompanyById(String id) {
    return companyRepository.findCompanyById(id);
  }

  public Company getCompanyByAffid(String affid) {
    return companyRepository.findCompanyByAffid(affid);
  }

  public Company createCompany(Company newCompany) {
    return companyRepository.save(newCompany);
  }
}
