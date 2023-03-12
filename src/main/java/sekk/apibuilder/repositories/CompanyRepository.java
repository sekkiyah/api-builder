package sekk.apibuilder.repositories;

import sekk.apibuilder.models.Company;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
  Optional<Company> findCompanyByAffid(String affid);
}
