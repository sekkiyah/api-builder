package sekk.apibuilder.repositories;

import sekk.apibuilder.models.Company;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
  Company findCompanyById(String id);
  Company findCompanyByAffid(String affid);
}
