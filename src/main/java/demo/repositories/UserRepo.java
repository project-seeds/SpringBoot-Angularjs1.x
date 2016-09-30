package demo.repositories;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;

import demo.beans.User;

public interface UserRepo extends PagingAndSortingRepository<User, Long> {

	Optional<User> findByUsername(String username);
}
