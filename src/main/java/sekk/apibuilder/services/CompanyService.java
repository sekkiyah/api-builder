package sekk.apibuilder.services;

import java.util.List;
import java.util.Optional;

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

  public Optional<Company> getCompanyById(String id) {
    return companyRepository.findById(id);
  }

  public Optional<Company> getCompanyByAffid(String affid) {
    return companyRepository.findCompanyByAffid(affid);
  }

  public Company createCompany(Company company) {
    // Workaround for avoiding regenerating apiKey from Company constructor
    // Company newCompany = companyRepository.save(company);
    // newCompany.generateApiKey();
    // return companyRepository.save(newCompany);
    
    return companyRepository.save(company);
  }

  public Optional<Company> updateCompany(Company company) {
    if(companyRepository.existsById(company.getId())){
      return Optional.of(companyRepository.save(company));
    } else {
      return Optional.empty();
    }
  }

  public Optional<Company> deleteCompany(Company company) {
    Optional<Company> deletedCompany = companyRepository.findById(company.getId());
    if(!deletedCompany.isEmpty()){
      companyRepository.delete(company);
      return deletedCompany;
    } else {
      return Optional.empty();
    }
  }
}
